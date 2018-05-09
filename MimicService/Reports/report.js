$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MimicServiceProject/MimicService/MimicTestU11.feature");
formatter.feature({
  "line": 1,
  "name": "The mock should learn to respond to requests that I have not defined so that i do not have to add code for that manually",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learning to calculate addition.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-addition.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I \"add\" values 5 and 2 with answer 7",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I \"add\" values 5 and 4 with answer 9",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I \"add\" values 9 and 4 with answer 13",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I ask for 5 \"add\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I get response \"35\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 268518416,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 207584358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "7",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 116333468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "9",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 34952773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "13",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 16592861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "add",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 14131058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 132139,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Learning to calculate subtraction.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-subtraction.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I \"sub\" values 5 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"sub\" values 5 and 4 with answer 1",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I \"sub\" values 9 and 4 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I ask for 35 \"sub\" 5",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I get response \"30\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 20335017,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 79696951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 221212304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 185243458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 178156384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 10
    },
    {
      "val": "sub",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 50735976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 111210,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Learning to calculate division.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-division.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I \"div\" values 6 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I \"div\" values 10 and 2 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I \"div\" values 10 and 5 with answer 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I ask for 30 \"div\" 3",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I get response \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 24693957,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 175642053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "6",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 141109499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 260338940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 110380654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 10
    },
    {
      "val": "div",
      "offset": 14
    },
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 47739462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 110389,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Learning to calculate multiply.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-multiply.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I \"mult\" values 5 and 2 with answer 10",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I \"mult\" values 5 and 5 with answer 25",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I \"mult\" values 9 and 4 with answer 36",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I ask for 5 \"mult\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I get response \"150\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 67788041,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 117908053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 213212159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "25",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 208256954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "36",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 131741183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "mult",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 42457602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 144040,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Learning to calculate mulitply diffirently.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-mulitply-diffirently.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I \"mult\" values 5 and 2 with answer 10",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I \"mult\" values 5 and 4 with answer 20",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I \"mult\" values 9 and 4 with answer 36",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I ask for 5 \"mult\" 30",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I get response \"150\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 13843389,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 133119613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 226984555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "20",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 179904967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mult",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 22
    },
    {
      "val": "36",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 43032939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "mult",
      "offset": 13
    },
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 566277267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 690651,
  "error_message": "java.lang.Exception\r\n\tat MimicServiceProject.MimicService.MimicTestSteps.i_get_response(MimicTestSteps.java:35)\r\n\tat ✽.Then I get response \"150\"(MimicServiceProject/MimicService/MimicTestU11.feature:46)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 48,
  "name": "Learning to calculate subtraction with a negative answer.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-subtraction-with-a-negative-answer.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I \"sub\" values 5 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I \"sub\" values 5 and 4 with answer 1",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I \"sub\" values 9 and 4 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I ask for 5 \"sub\" 35",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I get response \"-30\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 13565159,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 100867479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 24957414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 157850913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sub",
      "offset": 3
    },
    {
      "val": "9",
      "offset": 15
    },
    {
      "val": "4",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 126351806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "sub",
      "offset": 13
    },
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 110320330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-30",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 95616,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Learning to calculate division and divide by zero.",
  "description": "",
  "id": "the-mock-should-learn-to-respond-to-requests-that-i-have-not-defined-so-that-i-do-not-have-to-add-code-for-that-manually;learning-to-calculate-division-and-divide-by-zero.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I \"div\" values 6 and 2 with answer 3",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I \"div\" values 10 and 2 with answer 5",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I \"div\" values 10 and 5 with answer 2",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I ask for 30 \"div\" 0",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I get response \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 20319423,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 112166581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "6",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 35
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 220154783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 177855995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "div",
      "offset": 3
    },
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "MimicTestSteps.i_values_and_and(String,int,int,int)"
});
formatter.result({
  "duration": 74479109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 10
    },
    {
      "val": "div",
      "offset": 14
    },
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "MimicTestSteps.i_ask_for(int,String,int)"
});
formatter.result({
  "duration": 23213756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 86587,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/MimicTestU1U2.feature");
formatter.feature({
  "line": 1,
  "name": "The mock should remember requests and responses using the Service U1,U2",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learn a response and verify it remembers it \t correctly. TF:2.01",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;learn-a-response-and-verify-it-remembers-it---correctly.-tf:2.01",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "has learned request \"Number\" and response \"One\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I give request \"Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I get response \"One\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 18484252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "One",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 203296002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 126365759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 92333,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Try to get a response from a non-existing request. TF:2.03",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;try-to-get-a-response-from-a-non-existing-request.-tf:2.03",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I give request \"adasda\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 25121562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adasda",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 149009513,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 201901,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Learning multiple req/resp and verify it remembers not only first/last response. TF:2.04",
  "description": "",
  "id": "the-mock-should-remember-requests-and-responses-using-the-service-u1,u2;learning-multiple-req/resp-and-verify-it-remembers-not-only-first/last-response.-tf:2.04",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I give request \"Laurel\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I get response \"Hardy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 24155963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 232423997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 216118803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 221922653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 125080894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardy",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 100951,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/MimicTestU4.feature");
formatter.feature({
  "line": 1,
  "name": "As a Tester I would like to unlearn the previously learned response so that I do not have to perform the request again",
  "description": "",
  "id": "as-a-tester-i-would-like-to-unlearn-the-previously-learned-response-so-that-i-do-not-have-to-perform-the-request-again",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Learn a response then unlearn it. TF:2.02",
  "description": "",
  "id": "as-a-tester-i-would-like-to-unlearn-the-previously-learned-response-so-that-i-do-not-have-to-perform-the-request-again;learn-a-response-then-unlearn-it.-tf:2.02",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Mimic has no learned requests",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "has learned request \"Number\" and response \"One\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I use unlearn command",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 21208283,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.mimic_has_no_learned_requests()"
});
formatter.result({
  "duration": 323840676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "One",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 372391848,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 185427303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 166833481,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 88229,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/MimicTestU5.feature");
formatter.feature({
  "line": 1,
  "name": "As a Tester I would like the mock to unlearn all responses so that I can rerun all the tests without restarting the service",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Learning multiple req/resp and verify it unlearn all",
  "description": "",
  "id": "as-a-tester-i-would-like-the-mock-to-unlearn-all-responses-so-that-i-can-rerun-all-the-tests-without-restarting-the-service;learning-multiple-req/resp-and-verify-it-unlearn-all",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "has learned request \"Banana\" and response \"Skids\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Laurel\" and response \"Hardy\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has learned request \"Ful\" and response \"Bil\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I use unlearnAll command",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I give request \"Laurel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I give request \"Ful\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get response Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 87178799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banana",
      "offset": 21
    },
    {
      "val": "Skids",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 287990838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 21
    },
    {
      "val": "Hardy",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 197866819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 21
    },
    {
      "val": "Bil",
      "offset": 40
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 216822176,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearnAll_command()"
});
formatter.result({
  "duration": 44644869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laurel",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 61875444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ful",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 90619333,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_get_response_NULL()"
});
formatter.result({
  "duration": 92743,
  "status": "passed"
});
formatter.uri("MimicServiceProject/MimicService/MimicTestU9.feature");
formatter.feature({
  "line": 1,
  "name": "Unlearn the previously learned response in the middle of a sequence",
  "description": "",
  "id": "unlearn-the-previously-learned-response-in-the-middle-of-a-sequence",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Unlearn in the middle of a sequence",
  "description": "",
  "id": "unlearn-the-previously-learned-response-in-the-middle-of-a-sequence;unlearn-in-the-middle-of-a-sequence",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Mimicservice is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "has learned request \"Number\" and response \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "has learned request \"Number\" and response \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has learned request \"Number\" and response \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "has learned request \"Number\" and response \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I resetState",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I use unlearn command",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I give request \"Number\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I get response \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicTestSteps.mimicservice_is_up_and_running()"
});
formatter.result({
  "duration": 31300899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 354069281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 204833655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 62910805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 16153357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 41810449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 12663989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 26033812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 21
    },
    {
      "val": "4",
      "offset": 43
    }
  ],
  "location": "MimicTestSteps.has_learned_request_and_response(String,String)"
});
formatter.result({
  "duration": 96670224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 55411310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 73529104,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_resetState()"
});
formatter.result({
  "duration": 62930913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 79427338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 43947241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 12523643,
  "status": "passed"
});
formatter.match({
  "location": "MimicTestSteps.i_use_unlearn_command()"
});
formatter.result({
  "duration": 10658926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_give_request(String)"
});
formatter.result({
  "duration": 5559680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "MimicTestSteps.i_get_response(String)"
});
formatter.result({
  "duration": 96026,
  "status": "passed"
});
});