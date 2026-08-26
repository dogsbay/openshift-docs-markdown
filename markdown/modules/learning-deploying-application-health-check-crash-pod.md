{%- set _mod_docs_content_type = "PROCEDURE" %}
# Crashing the pod  {id="learning-deploying-application-health-check-crash-pod_{{ context }}"}

To test the failure states for your application, you can force the pod to crash. Observing this crash demonstrates how the system handles unexpected terminations and initiates recovery. {._abstract}

**Procedure**

1.  From the OSToy application web console, click **Home** in the left menu, and enter a message in the **Crash Pod** box, for example, `This is goodbye!`. 
1.  Click **Crash Pod**.
    ![OSToy crash pod selection](/images/5-ostoy-crashpod.png)

    The pod crashes and Kubernetes restarts the pod.
    ![OSToy pod crash message](/images/5-ostoy-crashmsg.png)