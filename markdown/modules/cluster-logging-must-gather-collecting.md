{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting {{ logging }} data {id="cluster-logging-must-gather-collecting_{{ context }}"}

You can use the `oc adm must-gather` CLI command to collect information about {{ logging }}.

**Procedure**

To collect {{ logging }} information with `must-gather`:

1.  Navigate to the directory where you want to store the `must-gather` information.
1.  Run the `oc adm must-gather` command against the {{ logging }} image:
    {%- if not openshift_origin %}
    ```terminal
    $ oc adm must-gather --image=$(oc -n openshift-logging get deployment.apps/cluster-logging-operator -o jsonpath='{.spec.template.spec.containers[?(@.name == "cluster-logging-operator")].image}')
    ```
{% endif %}
{% if openshift_origin %}
    ```terminal
    $ oc adm must-gather --image=quay.io/openshift/origin-cluster-logging-operator
    ```
{%- endif %}

    The `must-gather` tool creates a new directory that starts with `must-gather.local` within the current directory. For example:
    `must-gather.local.4157245944708210408`.
1.  Create a compressed file from the `must-gather` directory that was just created. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar -cvaf must-gather.tar.gz must-gather.local.4157245944708210408
    ```
1.  Attach the compressed file to your support case on the [Red Hat Customer Portal](https://access.redhat.com/).