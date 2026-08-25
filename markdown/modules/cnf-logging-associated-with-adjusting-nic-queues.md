{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging associated with adjusting NIC queues {id="logging-associated-with-adjusting-nic-queues_{{ context }}"}

To verify NIC queue adjustments, review the Tuned daemon logs. These log messages detail the assigned devices that are recorded in the respective Tuned daemon logs. {._abstract}

The following messages might be recorded to the `/var/log/tuned/tuned.log` file:

*   An `INFO` message is recorded detailing the successfully assigned devices:
    ```terminal
    INFO tuned.plugins.base: instance net_test (net): assigning devices ens1, ens2, ens3
    ```
*   A `WARNING` message is recorded if none of the devices can be assigned:
    ```terminal
    WARNING  tuned.plugins.base: instance net_test: no matching devices available
    ```