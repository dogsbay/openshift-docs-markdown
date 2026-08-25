{%- set _mod_docs_content_type = "CONCEPT" %}
# The {{ microshift_short }} health check script {id="microshift-health-script_{{ context }}"}

The `40_microshift_running_check.sh` health check script only performs validation of core {{ microshift_short }} services. Install your customized workload health check scripts in the greenboot directories to ensure successful application operations after system updates. Scripts run in alphabetical order. {._abstract}

{{ microshift_short }} health checks are listed in the following table:

**Validation statuses and outcome for {{ microshift_short }}**

| Validation | Pass | Fail |
| --- | --- | --- |
| Check that the script runs with `root` permissions | Next | `exit 0` |
| Check that the `microshift.service` is enabled | Next | `exit 0` |
| Wait for the `microshift.service` to be active (!failed) | Next | `exit 1` |
| For each core namespace, wait for readiness of the workload | Next | `exit 1` |

## Validation wait period {id="validation-wait-period_{{ context }}"}

The wait period in each validation is 10 minutes by default. After the wait period, if the validation has not succeeded, it is declared a failure. This wait period is incrementally increased by the base wait period after each boot in the verification loop.

*   You can override the base-time wait period by setting the `MICROSHIFT_WAIT_TIMEOUT_SEC` environment variable in the `/etc/greenboot/greenboot.conf` configuration file. For example, you can change the wait time to 5 minutes by resetting the value to 300 seconds, such as `MICROSHIFT_WAIT_TIMEOUT_SEC=300`.