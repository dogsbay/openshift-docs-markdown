{%- set _mod_docs_content_type = "CONCEPT" %}

# Telemetry in odo {id="odo-telemetry_{{ context }}"}

`odo` collects information about how it is being used, including metrics on the operating system, RAM, CPU, number of cores, `odo` version, errors, success/failures, and how long `odo` commands take to complete.

You can modify your telemetry consent by using the `odo preference` command:

*   `odo preference set ConsentTelemetry true` consents to telemetry.
*   `odo preference unset ConsentTelemetry` disables telemetry.
*   `odo preference view` shows the current preferences.