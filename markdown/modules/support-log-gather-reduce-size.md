{%- set _mod_docs_content_type = "REFERENCE" %}
# Configurations for reducing the must-gather log size {id="must-gather-operator-size-reduction-examples_{{ context }}"}

Large `must-gather` logs can take a significant amount of time to upload to support cases and also consume considerable cluster storage. You can optimize the size of the collected diagnostic data by applying specific configurations to your `MustGather` custom resource (CR). {._abstract}

The following examples demonstrate different methods for reducing the must-gather log size:

**Skipping rotated logs**
You can exclude older, rotated log files, such as `**.gz` or `**.1` files, from the collection by setting the shell variable `REDUCE_LOGS=skip_rotated_logs` before running the `gather` script.

```yaml title="Example MustGather CR configured to skip rotated logs"
apiVersion: operator.openshift.io/v1alpha1
kind: MustGather
metadata:
  name: full-mustgather
spec:
  serviceAccountName: must-gather-operator
  gatherSpec:
    command:
      - /bin/sh
      - -c
      - |
        REDUCE_LOGS=skip_rotated_logs gather
  uploadTarget:
    type: SFTP
    sftp:
      caseID: '02527285'
      caseManagementAccountSecretRef:
        name: sftp-access-rh-creds
      internalUser: true
```


`REDUCE_LOGS=skip_rotated_logs gather`
:   Sets the `REDUCE_LOGS` shell variable and executes the `gather` script. As a result, the script excludes the collection of rotated log files.