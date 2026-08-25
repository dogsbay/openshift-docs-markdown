{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting {{ IBMFusionFirst }} {id="troubleshoot-fusion-access-san_{{ context }}"}

If you encounter issues with {{ IBMFusionFirst }}, provide the must-gather image to Red&#160;Hat support. This image contains critical data about your cluster and project resources, logs, and events from your deployment. {._abstract}

**Procedure**

1.  To obtain the deployed version of {{ IBMFusionFirst }}, run the following command:
    ```terminal
    $ oc get fusionaccesses.fusion.storage.openshift.io  -n ibm-fusion-access fusionaccess-sample -o jsonpath='{.spec.storageScaleVersion}'
    ```

    :::note

    This command returns the numeric value of the deployed version of {{ IBMFusionFirst }} such as `2.11.0`.
    
    :::

1.  To create the `must-gather` image, run the following command:
    ```terminal
    $ oc adm must-gather --image=icr.io/cpopen/ibm-spectrum-scale-must-gather:v<software_version>
    ```
    *   Replace `<software_version>` with the {{ IBMFusionFirst }} version value.