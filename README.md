tumble-breaker
==============

Javascript brute force search for answer to Fog Creek Software Engineering puzzle.

Results
=======

[First Run]

Last attempted string = awlmaeaaa

Ended after 3,145,728 trials before allocation error.

   FATAL ERROR: CALL_AND_RETRY_2 Allocation failed - process out of memory
   
Range 68,719,476,736.

First run only covers 0.0046% of cases.

[Second Run]

Last attempted string = cadialaaa

Pulled some local instance variables out of the while loop and tried again.

Starting rate of 13,107 per second.

Would take 60 days to Break!!!

After a few minutes, would stop continuous string of trys and started pausing after a burst of ~5-10 tries.

[Third Run]

Last attempted string = uulpcmaaa

Globalized more variables. Avoid instantiating modules multiple times in a loop.

Rate closer to 18,724 per second.

Still occasional pausing, but going to allow to run for extended time.

Starting ~7:50PM - Ending 7:55PM. 5 minutes.

[Fourth Run]

Last attempted string = unlnnptaa

Reducing number of console outputs to once every 100,000 trials.

Drasticly improves performance.

Closer to 1,048,576 per second!

Could be done in as soon as 18 HOURS!

Started ~8PM - Ended 8:05. 5 minutes.

[Fifth Run]

Last attempted string: usnnumrea

Lets try only logging every 1,000,000.

Only logs once a second or so. Trying for long term test.

Started ~8:10PM - Ended 8:30PM.

[Sixth Run]

Take out Date.now call to see how it affects performance.

Not much faster, may just let it run as performance improvements are tapering off.

Started 8:35PM - End 11:54PM.

at 9:45PM - 2,404,000,000 combinations. [ungopursa]

[Seventh Run]

Fresh sample.