---
title: Overriding the active deadline for run-once pods
---

# Overriding the active deadline for run-once pods {#run-once-duration-override-install}

You can use the {{ run_once_operator }} to set a maximum active deadline for run-once pods in your cluster.

By enabling the run-once duration override on a namespace, all future run-once pods created or updated in that namespace have their `activeDeadlineSeconds` field set to the value specified by the {{ run_once_operator }}.

> [!NOTE]
> If both the run-once pod and the {{ run_once_operator }} have their `activeDeadlineSeconds` value set, the lower of the two values is used.
