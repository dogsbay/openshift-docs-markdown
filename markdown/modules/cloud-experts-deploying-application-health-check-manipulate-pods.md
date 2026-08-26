{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manipulating your pods {id="cloud-experts-deploying-application-health-manipulate-pods_{{ context }}"}

You can crash and revive your pods to see how the application reports these statuses. {._abstract}

**Procedure**

1.  From the OSToy application web console, click **Home** in the left menu, and enter a message in the **Crash Pod** box, for example, `This is goodbye!`. 
1.  Click **Crash Pod**.
    ![OSToy crash pod selection](/images/5-ostoy-crashpod.png)

    The pod crashes and Kubernetes should restart the pod.
    ![OSToy pod crash message](/images/5-ostoy-crashmsg.png)
1.  You can now revive your pod from the OpenShift web console, quickly switch to the **Deployments** screen. You will see that the pod turns yellow, meaning it is down. It should quickly revive and turn blue. The revival process happens quickly so you might miss it.
    ![Deployment details page](/images/5-ostoy-podcrash.gif)

**Verification**

1.  From the web console, click  **Pods > ostoy-frontend-xxxxxxx-xxxx** to change to the pods screen.
    ![Pod overview page](/images/5-ostoy-events.png)
1.  Click the **Events** sub-tab and verify that the container crashed and restarted.
    ![Pod events list](/images/5-ostoy-podevents.png)