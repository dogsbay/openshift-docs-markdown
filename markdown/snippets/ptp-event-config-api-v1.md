{%- set _mod_docs_content_type = "SNIPPET" %}
```yaml
apiVersion: ptp.openshift.io/v1
kind: PtpOperatorConfig
metadata:
  name: default
  namespace: openshift-ptp
spec:
  daemonNodeSelector:
    node-role.kubernetes.io/worker: ""
  ptpEventConfig:
    enableEventPublisher: true (1)
```
1.  Enable PTP fast event notifications by setting `enableEventPublisher` to `true`.