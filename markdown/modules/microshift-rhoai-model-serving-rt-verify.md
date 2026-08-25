{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying that the model-serving runtime is ready {id="microshift-rhoai-model-serving-rt-verify_{{ context }}"}

You can use the {{ oc_first }} to verify that your model-serving runtime is ready for use by checking that the downstream generation activities are complete. {._abstract}

**Prerequisites**

*   You configured the `ServingRuntimes` CR.
*   You created the `InferenceService` CR.
*   You have root user access to your machine.
*   The {{ oc_first }} is installed.

**Procedure**

1.  Check that the AI model is deployed in your custom namespace by running the following command:
    ```terminal
    $ oc get -n ai-demo deployment
    ```
    ```terminal title="Example output"
    NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
    ovms-resnet50-predictor   1/1     1            1           72s
    ```
1.  Confirm that your deployment is in progress by running the following command:
    ```terminal
    $ oc rollout status -n ai-demo deployment ovms-resnet50-predictor
    ```
    ```terminal title="Example output"
    deployment "ovms-resnet50-predictor" successfully rolled out
    ```
1.  Check that the AI model workload pod is deployed in your custom namespace by running the following command:
    ```terminal
    $ oc get -n ai-demo pod
    ```
    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS      AGE
    ovms-resnet50-predictor-6fdb566b7f-bc9k5   2/2     Running   1 (72s ago)   74s
    ```
1.  Check for the service that KServe created by running the following command:
    ```terminal
    $ oc get svc -n ai-demo
    ```
    ```terminal title="Example output"
    NAME                      TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
    ovms-resnet50-predictor   ClusterIP   None         <none>        80/TCP    119s
    ```

**Next steps**

*   Create a `Route` object so that your applications can reach the {{ microshift_short }} node.