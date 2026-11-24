# The Funniest Out-of-Office — burn entry

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![make.fun rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/vora95/makefun-out-of-office-kreutzx-burn/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard)
[![make.fun reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/vora95/makefun-out-of-office-kreutzx-burn/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

One out-of-office auto-reply (82 characters), written by a deterministic program (`main.ts`, Node stdlib only, no network):

> Out of office until Monday. If this is urgent, it isn’t — I checked before I left.

`main.ts` validates the entry (1–140 chars, not only white space, single line, no trailing newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and verifies the file on disk is byte-identical (sha256 logged).
