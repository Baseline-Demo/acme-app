---
name: baseline-check
description: Check this company's security posture with Drata Baseline. Links this agent to the Baseline workspace, finds and connects the company's tools with the founder's approval, runs the read-only checks, and explains the results. Free plan.
---

Check our security posture with Drata Baseline.

1. Call `account_status`. If it returns `action_required`, I haven't seen the page: I can't see tool results. Put the link in your reply as a clickable link, wait until I say it's done, then call it again. Tell me which workspace and account you're linked to.
2. If tools aren't connected, work out which tools we use from this repository (for example the git remote, infrastructure code, deploy workflows, dependencies) and from your own context (for example other tools you're connected to). `account_status` also says what Baseline knows about our identity provider. Tell me what you found and why, and ask about anything you can't tell. Then connect each tool on its own: call `connect_source` for one tool with your reason, wait for my answer, then go on to the next. If it returns `action_required`, put the link in your reply as a clickable link and wait until I say it's done.
3. Call `run_baseline`. Report the three counts (verified passing, verified failing, need evidence) and the band, never a score. List the failing controls in one line each.
4. Don't fix anything. Give me the snapshot link, and say that `/baseline-fix` goes through the fixes with me, one control at a time.
