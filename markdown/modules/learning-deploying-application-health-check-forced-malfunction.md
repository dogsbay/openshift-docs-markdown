{%- set _mod_docs_content_type = "PROCEDURE" %}
# Making the application malfunction {id="learning-deploying-application-health-check-forced-malfunction_{{ context }}"}

You can test your application’s failure responses by purposefully causing the application to malfunction. By causing this failure, you can observe how your system handles unexpected errors and verify that it recovers correctly. {._abstract}

**Procedure**

*   From the OSToy application, click **Toggle Health** in the **Toggle Health Status** tile. Watch **Current Health** switch to **I’m not feeling all that well**.
    ![OSToy toggle health tile](/images/5-ostoy-togglehealth.png)

**Verification**

After you make the application malfunction, the application stops responding with a `200 HTTP code`. After 3 consecutive failures, Kubernetes stops the pod and restarts it.

*   From the web console, switch back to the pod events page to see that the liveness probe failed and the pod restarted.

The following image shows an example of what you will see on your pod events page.

![Pod events list](/images/5-ostoy-podevents2.png)

**A.** The pod has three consecutive failures.

**B.** Kubernetes stops the pod.

**C.** Kubernetes restarts the pod.