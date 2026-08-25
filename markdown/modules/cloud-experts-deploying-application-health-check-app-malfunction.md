{%- set _mod_docs_content_type = "PROCEDURE" %}
# Making the application malfunction {id="cloud-experts-deploying-application-health-app-malfunction_{{ context }}"}

You can force the application that you deployed to malfunction to see how failures show up. {._abstract}

**Procedure**

*   From the OSToy application, click **Toggle Health** in the **Toggle Health Status** tile. Watch **Current Health** switch to **I’m not feeling all that well**.
    ![OSToy toggle health tile](/_assets/images/5-ostoy-togglehealth.png)

**Verification**

After the previous step, the application stops responding with a `200 HTTP code`. After 3 consecutive failures, Kubernetes will stop the pod and restart it. From the web console, switch back to the pod events page and you will see that the liveness probe failed and the pod restarted.

The following image shows an example of what you should see on your pod events page.

![Pod events list](/_assets/images/5-ostoy-podevents2.png)

**A.** The pod has three consecutive failures.
**B.** Kubernetes stops the pod.
**C.** Kubernetes restarts the pod.