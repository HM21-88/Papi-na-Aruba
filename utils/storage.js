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

    confusion_log:[]

  };

}

function getLearnerData(){

  const stored =
    localStorage.getItem(
      'learnerData'
    );

  if(stored){

    return JSON.parse(
      stored
    );

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