{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reviewing pod status {id="reviewing-pod-status_{{ context }}"}

You can query pod status and error states. You can also query a pod’s associated deployment configuration and review base image availability. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed the OpenShift CLI (`oc`).
*   `skopeo` is installed.

**Procedure**

1.  Switch into a project:
    ```terminal
    $ oc project <project_name>
    ```
1.  List pods running within the namespace, as well as pod status, error states, restarts, and age:
    ```terminal
    $ oc get pods
    ```
1.  Determine whether the namespace is managed by a deployment configuration:
    ```terminal
    $ oc status
    ```

    If the namespace is managed by a deployment configuration, the output includes the deployment configuration name and a base image reference.
1.  Inspect the base image referenced in the preceding command’s output:
    ```terminal
    $ skopeo inspect docker://<image_reference>
    ```
1.  If the base image reference is not correct, update the reference in the deployment configuration:
    ```terminal
    $ oc edit deployment/my-deployment
    ```
1.  When deployment configuration changes on exit, the configuration will automatically redeploy. Watch pod status as the deployment progresses, to determine whether the issue has been resolved:
    ```terminal
    $ oc get pods -w
    ```
1.  Review events within the namespace for diagnostic information relating to pod failures:
    ```terminal
    $ oc get events
    ```