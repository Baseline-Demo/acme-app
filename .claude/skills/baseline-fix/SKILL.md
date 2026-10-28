---
name: baseline-fix
description: Fix failing security controls with Drata Baseline, one control at a time. For each control, shows why it matters, the evidence and the exact change, and applies it only after the founder says apply. Free plan.
---

Help me fix our failing controls with Drata Baseline, one control at a time.

1. Call `account_status`. If it returns `action_required`, I haven't seen the page: I can't see tool results. Put the link in your reply as a clickable link, wait until I say it's done, then call it again.
2. Call `run_baseline` to get the current failures.
3. Go through the failing controls that have a machine fix, one at a time. For each one:
   1. Name the control and its SOC 2 criteria, say in one sentence why it matters, and show the evidence.
   2. Call `get_fix` and show exactly what will change.
   3. Ask me: apply, or skip? Then stop and wait for my answer.
   4. If I say apply, call `apply_fix` with `confirm: true`.
      - If it returns `commands`, Baseline changed nothing: it only reads. Show me the commands, then run them in order in my shell, with my own login. Stop at the first error and show it to me.
      - If it returns `steps`, give them to me and wait until I say they are done.
   5. Call `run_baseline`, and tell me whether the control now passes.
4. After the last one, summarize what changed, and list what still needs a person, including the checks that need evidence.
