{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling node auto-scaling for the hosted cluster {id="hcp-bm-autoscale-disable_{{ context }}"}

If needed, you can disable node auto-scaling. {._abstract}

**Procedure**

*   Enter the following command to disable node auto-scaling for the hosted cluster:
    ```terminal
    $ oc -n <hosted_cluster_namespace> patch nodepool <hosted_cluster_name> \
      --type=json \
      -p '[\{"op":"remove", "path": "/spec/autoScaling"}, \{"op": "add", "path": "/spec/replicas", "value": <specify_value_to_scale_replicas>]'
    ```

    The command removes `"spec.autoScaling"` from the YAML file, adds `"spec.replicas"`, and sets `"spec.replicas"` to the integer value that you specify.