{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tuning the polling period for idle virtual CPUs {id="tune-the-polling-period-for-idle-virtual-cpus_{{ context }}"}

When a virtual CPU becomes idle, KVM polls for wakeup conditions for the virtual CPU before allocating the host resource. You can specify the time interval, during which polling takes place in sysfs at `/sys/module/kvm/parameters/halt_poll_ns`.  {._abstract}

During the specified time, polling reduces the wakeup latency for the virtual CPU at the expense of resource usage. Depending on the workload, a longer or shorter time for polling can be beneficial. The time interval is specified in nanoseconds. The default is `50000` ns.

**Procedure**

*   To optimize for low CPU consumption, enter a small value or write `0` to disable polling:
    ```terminal
    # echo 0 > /sys/module/kvm/parameters/halt_poll_ns
    ```
*   To optimize for low latency, for example for transactional workloads, enter a large value:
    ```terminal
    # echo 80000 > /sys/module/kvm/parameters/halt_poll_ns
    ```