{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying Argo CD self-healing behavior {id="verifying-argo-cd-self-healing-behavior_{{ context }}"}

Argo CD constantly monitors the state of deployed applications, detects differences between the specified manifests in Git and live changes in the cluster, and then automatically corrects them. This behavior is referred to as self-healing.

You can test and observe the self-healing behavior in Argo CD.

**Prerequisites**

*   The sample `app-spring-petclinic` application is deployed and configured.

**Procedure**

1.  In the Argo CD dashboard, verify that your application has the `Synced` status.
1.  Click the `app-spring-petclinic` tile in the Argo CD dashboard to view the application resources that are deployed to the cluster.
1.  In the {{ product_title }} web console, navigate to the **Developer** perspective.
1.  Modify the Spring PetClinic deployment and commit the changes to the `app/` directory of the Git repository. Argo CD will automatically deploy the changes to the cluster.
    1.  Fork the [OpenShift GitOps getting started repository](https://github.com/redhat-developer/openshift-gitops-getting-started).
    1.  In the `deployment.yaml` file, change the `failureThreshold` value to `5`.
    1.  In the deployment cluster, run the following command to verify the changed value of the `failureThreshold` field:
        ```terminal
        $ oc edit deployment spring-petclinic -n spring-petclinic
        ```
1.  Test the self-healing behavior by modifying the deployment on the cluster and scaling it up to two pods while watching the application in the {{ product_title }} web console.
    1.  Run the following command to modify the deployment:
        ```terminal
        $ oc scale deployment spring-petclinic --replicas 2  -n spring-petclinic
        ```
    1.  In the {{ product_title }} web console, notice that the deployment scales up to two pods and immediately scales down again to one pod. Argo CD detected a difference from the Git repository and auto-healed the application on the {{ product_title }} cluster.
1.  In the Argo CD dashboard, click the **app-spring-petclinic** tile → **APP DETAILS** → **EVENTS**. The **EVENTS** tab displays the following events: Argo CD detecting out of sync deployment resources on the cluster and then resyncing the Git repository to correct it.