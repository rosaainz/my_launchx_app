const MissionCommander = require('./../app/missionCommander/MissionCommander');

describe("Unit Test for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
      const myMissionCommander = new MissionCommander("Woopa")
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  