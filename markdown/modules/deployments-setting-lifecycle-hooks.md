{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting lifecycle hooks {id="deployments-setting-lifecycle-hooks_{{ context }}"}

You can set lifecycle hooks, or deployment hooks, for a deployment using the CLI. {._abstract}

**Procedure**

1.  Use the `oc set deployment-hook` command to set the type of hook you want: `--pre`, `--mid`, or `--post`. For example, to set a pre-deployment hook:
    ```terminal
    $ oc set deployment-hook dc/frontend \
        --pre -c helloworld -e CUSTOM_VAR1=custom_value1 \
        --volumes data --failure-policy=abort -- /usr/bin/command arg1 arg2
    ```