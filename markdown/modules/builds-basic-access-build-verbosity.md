{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling log verbosity {id="builds-basic-access-build-verbosity_{{ context }}"}

You can enable a more verbose output by passing the `BUILD_LOGLEVEL` environment variable as part of the `sourceStrategy`
{%- if openshift_origin or openshift_enterprise %}
or `dockerStrategy`
{%- endif %}
in a `BuildConfig`.


:::note

An administrator can set the default build verbosity for the entire {{ product_title }} instance by configuring `env/BUILD_LOGLEVEL`. This default can be overridden by specifying `BUILD_LOGLEVEL` in a given `BuildConfig`. You can specify a higher priority override on the command line for non-binary builds by passing `--build-loglevel` to `oc start-build`.

:::


Available log levels for source builds are as follows:


Level 0
:   Produces output from containers running the `assemble` script and all encountered errors. This is the default.

Level 1
:   Produces basic information about the executed process.

Level 2
:   Produces very detailed information about the executed process.

Level 3
:   Produces very detailed information about the executed process, and a listing of the archive contents.

Level 4
:   Currently produces the same information as level 3.

Level 5
:   Produces everything mentioned on previous levels and additionally provides docker push messages.

**Procedure**

*   To enable more verbose output, pass the `BUILD_LOGLEVEL` environment variable as part of the `sourceStrategy`
    {%- if not openshift_online %}
    or `dockerStrategy`
    {%- endif %}
    in a `BuildConfig`:
    ```yaml
    sourceStrategy:
    ...
      env:
        - name: "BUILD_LOGLEVEL"
          value: "2" (1)
    ```
    1.  Adjust this value to the desired log level.