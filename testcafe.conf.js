const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    return runner
      .src('./test-cafe-project/test/*.Tests.ts')
      .browsers(['chrome'])
      .concurrency(3)
      .run();
  })
  .then(failedCount => {
    console.log(`Failed tests: ${failedCount}`);
    testcafe.close();
  });
