{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tuning the CPU migration algorithm of the host scheduler {id="tune-the-cpu-migration-algorithm-of-the-host-scheduler_{{ context }}"}

You can tune the CPU migration algorithm of the host scheduler to meet the demands of your production system. {._abstract}


:::important

Do not change the scheduler settings unless you are an expert who understands the implications. Do not apply changes to production systems without testing them and confirming that they have the intended effect.

:::


The `kernel.sched_migration_cost_ns` parameter specifies a time interval in nanoseconds. After the last execution of a task, the CPU cache is considered to have useful content until this interval expires. Increasing this interval results in fewer task migrations. The default value is `500000` ns.

If the CPU idle time is higher than expected when there are runnable processes, try reducing this interval. If tasks bounce between CPUs or nodes too often, try increasing it.

**Procedure**

*   To dynamically set the interval to `60000` ns, enter the following command:
    ```terminal
    # sysctl kernel.sched_migration_cost_ns=60000
    ```
*   To persistently change the value to `60000` ns, add the following entry to `/etc/sysctl.conf`:
    ```config
    kernel.sched_migration_cost_ns=60000
    ```