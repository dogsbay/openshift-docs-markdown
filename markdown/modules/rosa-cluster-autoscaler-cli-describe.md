{%- set _mod_docs_content_type = "PROCEDURE" %}
# View autoscaler configurations with the ROSA CLI {id="rosa-cluster-autoscaler-cli-describe_{{ context }}"}

You can view your cluster autoscaler configurations using the `rosa describe autoscaler` command. {._abstract}

**Procedure**

*   To view cluster autoscaler configurations, run the following command:
    **Example**

{%- if openshift_rosa_hcp %}
    ```terminal
    $ rosa describe autoscaler -h --cluster=<mycluster>
    ```
{% endif %}

{% if openshift_rosa %}
```
$ rosa describe autoscaler --cluster=<mycluster>
```
{% endif %}