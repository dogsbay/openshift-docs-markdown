{%- set _mod_docs_content_type = "REFERENCE" %}
# Exit codes for fencing-validator script {id="exit-codes-for-fencing-validator-script_{{ context }}"}

The `fencing_validator` script uses specific exit codes so automation and support tooling can programmatically determine what went wrong. {._abstract}

The following table lists the specific exit codes that the `fencing_validator` script returns, mapping each numerical value to its corresponding diagnostic state to assist with automated troubleshooting.

| Exit code | Description |
| --- | --- |
| 0 | All checks passed |
| 1 | Generic or unexpected failure |
| 20 | STONITH devices are missing or not enabled |
| 21 | One or both nodes are not ONLINE in Pacemaker |
| 22 | One or more required daemons (corosync, pacemaker, pcsd) are not running |
| 23 | etcd does not have quorum or not all members are healthy |
| 26 | Fencing secrets are missing or do not match the expected nodes |