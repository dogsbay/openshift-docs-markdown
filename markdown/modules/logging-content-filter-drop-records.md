{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring content filters to drop unwanted log records {id="logging-content-filter-drop-records_{{ context }}"}

When the `drop` filter is configured, the log collector evaluates log streams according to the filters before forwarding. The collector drops unwanted log records that match the specified configuration.

**Prerequisites**

*   You have installed the {{ clo }}.
*   You have administrator permissions.
*   You have created a `ClusterLogForwarder` custom resource (CR).

**Procedure**

1.  Add a configuration for a filter to the `filters` spec in the `ClusterLogForwarder` CR.

    The following example shows how to configure the `ClusterLogForwarder` CR to drop log records based on regular expressions:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
    # ...
    spec:
      filters:
      - name: <filter_name>
        type: drop # (1)
        drop: # (2)
        - test: # (3)
          - field: .kubernetes.labels."foo-bar/baz" # (4)
            matches: .+ # (5)
          - field: .kubernetes.pod_name
            notMatches: "my-pod" # (6)
      pipelines:
      - name: <pipeline_name> # (7)
        filterRefs: ["<filter_name>"]
    # ...
    ```
    1.  Specifies the type of filter. The `drop` filter drops log records that match the filter configuration.
    1.  Specifies configuration options for applying the `drop` filter.
    1.  Specifies the configuration for tests that are used to evaluate whether a log record is dropped.
        *   If all the conditions specified for a test are true, the test passes and the log record is dropped.
        *   When multiple tests are specified for the `drop` filter configuration, if any of the tests pass, the record is dropped.
        *   If there is an error evaluating a condition, for example, the field is missing from the log record being evaluated, that condition evaluates to false.
    1.  Specifies a dot-delimited field path, which is a path to a field in the log record. The path can contain alpha-numeric characters and underscores (`a-zA-Z0-9_`), for example, `.kubernetes.namespace_name`. If segments contain characters outside of this range, the segment must be in quotes, for example, `.kubernetes.labels."foo.bar-bar/baz"`. You can include multiple field paths in a single `test` configuration, but they must all evaluate to true for the test to pass and the `drop` filter to be applied.
    1.  Specifies a regular expression. If log records match this regular expression, they are dropped. You can set either the `matches` or `notMatches` condition for a single `field` path, but not both.
    1.  Specifies a regular expression. If log records do not match this regular expression, they are dropped. You can set either the `matches` or `notMatches` condition for a single `field` path, but not both.
    1.  Specifies the pipeline that the `drop` filter is applied to.
1.  Apply the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Additional examples**

The following additional example shows how you can configure the `drop` filter to only keep higher priority log records:

```yaml
apiVersion: logging.openshift.io/v1
kind: ClusterLogForwarder
metadata:
# ...
spec:
  filters:
  - name: important
    type: drop
    drop:
      test:
      - field: .message
        notMatches: "(?i)critical|error"
      - field: .level
        matches: "info|warning"
# ...
```

In addition to including multiple field paths in a single `test` configuration, you can also include additional tests that are treated as _OR_ checks. In the following example, records are dropped if either `test` configuration evaluates to true. However, for the second `test` configuration, both field specs must be true for it to be evaluated to true:

```yaml
apiVersion: logging.openshift.io/v1
kind: ClusterLogForwarder
metadata:
# ...
spec:
  filters:
  - name: important
    type: drop
    drop:
      test:
      - field: .kubernetes.namespace_name
        matches: "^open"
      test:
      - field: .log_type
        matches: "application"
      - field: .kubernetes.pod_name
        notMatches: "my-pod"
# ...
```