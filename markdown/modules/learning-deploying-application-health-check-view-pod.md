{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the revived pod {id="learning-deploying-application-health-check-view-pod_{{ context }}"}

You can check the status of your revived pod within {{ cluster_manager_url }}. Check the status to see how quickly the system revives the pod and recovers from unexpected failures. {._abstract}

**Procedure**

*   From the {{ ocp_short }} web console, quickly switch to the **Deployments** screen. You will see that the pod turns yellow, which means it is down. It should quickly revive and turn blue. The revival process happens quickly.
    ![Deployment details page](/_assets/images/5-ostoy-podcrash.gif)

**Verification**

1.  From the web console, click  **Pods > ostoy-frontend-xxxxxxx-xxxx** to change to the pods screen.
    ![Pod overview page](/_assets/images/5-ostoy-events.png)
1.  Click the **Events** subtab, and verify that the container crashed and restarted.
    ![Pod events list](/_assets/images/5-ostoy-podevents.png)