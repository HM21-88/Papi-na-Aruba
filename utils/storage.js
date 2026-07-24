function generateDeviceId(){

  return crypto.randomUUID();

}

function createLearnerData(){

return {

  device_id:
    generateDeviceId(),

  word_progress:{},

  category_stats:{},

  practice_log:[],

  confusion_log:[],

  travel_progress:{},

  souvenirs:[]

};

}

function getLearnerData(){

  const stored =
    localStorage.getItem(
      'learnerData'
    );

if(stored){

  const learnerData =
    JSON.parse(stored);

  if(
    !learnerData.souvenirs
  ){
    learnerData.souvenirs = [];
  }

  return learnerData;
}

  const learnerData =
    createLearnerData();

  localStorage.setItem(
    'learnerData',
    JSON.stringify(
      learnerData
    )
  );

  return learnerData;

}

function saveLearnerData(
  learnerData
){

  localStorage.setItem(
    'learnerData',
    JSON.stringify(
      learnerData
    )
  );

}

function addDays(
  date,
  days
){

  const result =
    new Date(date);

  result.setDate(
    result.getDate() + days
  );

  return result
    .toISOString();

}

function logQuizAttempt({
  word_id,
  typed_answer,
  correct,
  match_type,
  category
}){

  const learnerData =
    getLearnerData();

  learnerData.practice_log.push({

    word_id,

    typed_answer,

    correct,

    match_type,

    category,

    timestamp:
      new Date().toISOString()

  });

  const stats =
    learnerData.category_stats[
      category
    ] || {

      attempts_total:0,

      attempts_correct:0

    };

  stats.attempts_total++;

  if(correct){

    stats.attempts_correct++;

  }

  learnerData.category_stats[
    category
  ] = stats;

  saveLearnerData(
    learnerData
  );

}

function updateWordProgress(
  wordId,
  correct,
  { reducedJump = false } = {}
){

  const learnerData =
    getLearnerData();

  const progress =
    learnerData.word_progress[
      wordId
    ] || {

      repetitions:0,

      last_result:null,

      last_reviewed_at:null,

      interval_days:1,

      next_review_at:null

    };

  const today =
    new Date();

  if(correct){

    progress.repetitions++;

    const intervals =
      [1, 3, 7, 14, 30];

    let intervalIndex =
      Math.min(
        progress.repetitions - 1,
        intervals.length - 1
      );

    // Typo/bijna-goed: één stap minder ver in de intervallentabel.
    if(reducedJump){
      intervalIndex =
        Math.max(0, intervalIndex - 1);
    }

    progress.interval_days =
      intervals[intervalIndex];

  }else{

    progress.repetitions = 0;

    progress.interval_days = 1;

  }

  progress.last_result =
    correct
      ? 'correct'
      : 'incorrect';

  progress.last_reviewed_at =
    today.toISOString();

  progress.next_review_at =
    addDays(
      today,
      progress.interval_days
    );

  learnerData.word_progress[
    wordId
  ] = progress;

  saveLearnerData(
    learnerData
  );

}

function getPracticeLog(){

  return (
    getLearnerData()
      .practice_log || []
  );

}

function getCategoryAccuracy(
  category
){

  const learnerData =
    getLearnerData();

  const stats =
    learnerData.category_stats[
      category
    ];

  if(
    !stats ||
    !stats.attempts_total
  ){
    return 0;
  }

  return Math.round(
    (
      stats.attempts_correct /
      stats.attempts_total
    ) * 100
  );

}

function logConfusion(
  targetId,
  distractorId
){

  const learnerData =
    getLearnerData();

  if(
    !learnerData.confusion_log
  ){
    learnerData.confusion_log = [];
  }

  learnerData.confusion_log.push({

    target_id: targetId,

    distractor_id: distractorId,

    timestamp:
      new Date().toISOString()

  });

  saveLearnerData(
    learnerData
  );

}

function getConfusionCandidates(
  targetId
){

  const learnerData =
    getLearnerData();

  const log =
    learnerData.confusion_log || [];

  const counts = {};

  log.forEach(entry => {

    if(entry.target_id !== targetId){
      return;
    }

    counts[entry.distractor_id] =
      (counts[entry.distractor_id] || 0) + 1;

  });

  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .map(([distractorId]) => distractorId);

}

function getDifficultWords(
  limit = 3
){

  const learnerData =
    getLearnerData();

  const entries =
    Object.entries(
      learnerData.word_progress
    );

const difficultWords =
  entries
.filter(
  ([wordId, progress]) =>

    progress.repetitions <= 2 &&

    data.some(
      word =>
        word.id === wordId
    )
)

      .sort(
        (
          [, a],
          [, b]
        ) =>

          new Date(
            a.last_reviewed_at || 0
          ) -

          new Date(
            b.last_reviewed_at || 0
          )
      )
      .slice(
        0,
        limit
      );

  return difficultWords;

}