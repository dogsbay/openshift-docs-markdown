{%- set _mod_docs_content_type = "REFERENCE" %}
# Logging 6.0 Code Examples {id="log6x-code-ex_{{ context }}"}

Code examples used in the wider Logging 6.0 documentation are hosted here for single sourcing.

```yaml
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: my-forwarder
spec:
  serviceAccount:
    name: my-account
  filters:
    - name: my-multiline
      type: detectMultilineException
    - name: my-parse
      type: parse
    - name: my-labels
      type: openshiftLabels
      openshiftLabels:
        foo: bar
  pipelines:
    - name: my-pipeline
      inputRefs:
        - application
      outputRefs:
        - my-output
      filterRefs:
        - my-multiline
        - my-parse
        - my-labels
  outputs:
    - name: my-output
      type: http
      http:
        url: http://my-log-output:80
```

```yaml
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: my-forwarder
spec:
  serviceAccount:
    name: my-account
  filters:
    - name: drop-filter
      type: drop
      drop:
        - test:
            - field: '.level'
              matches: 'debug'
    - name: prune-filter
      type: prune
      prune:
        in:
          - '.kubernetes.labels.foobar'
        notIn:
          - '.message'
          - '.log_type'
    - name: audit-filter
      type: kubeAPIAudit
      kubeAPIAudit:
        omitResponseCodes:
          - 404
          - 409
  pipelines:
    - name: my-pipeline
      inputRefs:
        - application
        - audit
      outputRefs:
        - my-output
      filterRefs:
        - drop-filter
        - prune-filter
        - audit-filter
  outputs:
    - name: my-output
      type: http
      http:
        url: http://my-log-output:80
```

```yaml
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: my-forwarder
spec:
  serviceAccount:
    name: my-account
  inputs:
    - name: app-logs
      type: application
      application:
        includes:
          - namespace: my-ns1
            container: my-app1
        excludes:
          - namespace: my-ns2
            container: my-app2
    - name: audit-logs
      type: audit
      audit:
        ....
    - name: infra-logs
      type: infrastructure
      infrastructure:
        ....
  filters:
    - name: my-parse
      type: parse
    - name: my-app-label
      type: openshiftLabels
      openshiftLabels:
        my-log-index: app
    - name: my-infra-label
      type: openshiftLabels
      openshiftLabels:
        my-log-index: infra
  outputs:
    ......
  pipelines:
    - name: my-app
      inputRefs:
        - application
      filterRefs:
        - my-parse
        - my-app-label
      outputRefs:
        - es-output-by-label
    - name: my-infra
      inputRefs:
        - infrastructure
      filterRefs:
        - my-parse
        - my-infra-label
      outputRefs:
        - es-output-by-label
```

```yaml
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: my-forwarder
spec:
  serviceAccount:
    name: my-account
  outputs:
    - name: my-cw
      type: cloudwatch
      cloudwatch:
        groupName: test-cluster_{.log_type||"unknown"}
        region: us-east-1
        authentication:
          type: iamRole
          iamRole:
            roleARN:
              secretName: role-for-sts
              key: credentials
            token:
              from: serviceAccount
  pipelines:
    - name: my-cw-logs
      inputRefs:
        - application
        - infrastructure
      outputRefs:
        - my-cw
```

```yaml
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: my-forwarder
spec:
  serviceAccount:
    name: my-account
  outputs:
    - name: my-cw
      type: cloudwatch
      cloudwatch:
        groupName: test-cluster_{.log_type||"unknown"}
        region: us-east-1
        authentication:
          type: awsAccessKey
          awsAccessKey:
            keyId:
              secretName: cw-secret
              key: aws_access_key_id
            keySecret:
              secretName: cw-secret
              key: aws_secret_access_key
  pipelines:
    - name: my-cw-logs
      inputRefs:
        - application
        - infrastructure
      outputRefs:
        - my-cw
```