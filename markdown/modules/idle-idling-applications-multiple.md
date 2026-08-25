{%- set _mod_docs_content_type = "PROCEDURE" %}
# Idling multiple services {id="idle-idling-applications-multiple_{{ context }}"}

Scale multiple inactive services down to zero replicas to optimize cluster capacity. {._abstract}

Idling multiple services is helpful if an application spans across a set of services within a project, or when idling multiple services in conjunction with a script to idle multiple applications in bulk within the same project.

**Procedure**

1.  Create a file containing a list of the services, each on their own line.
1.  Idle the services using the `--resource-names-file` option:
    ```terminal
    $ oc idle --resource-names-file <filename>
    ```

    :::note

    The `idle` command is limited to a single project. For idling applications across
    a cluster, run the `idle` command for each project individually.
    
    :::