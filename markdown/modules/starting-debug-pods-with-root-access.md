{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting debug pods with root access {id="starting-debug-pods-with-root-access_{{ context }}"}

You can start a debug pod with root access, based on a problematic pod’s deployment or deployment configuration. Pod users typically run with non-root privileges, but running troubleshooting pods with temporary root privileges can be useful during issue investigation. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Your API service is still functional.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Start a debug pod with root access, based on a deployment.
    1.  Obtain a project’s deployment name:
        ```terminal
        $ oc get deployment -n <project_name>
        ```
    1.  Start a debug pod with root privileges, based on the deployment:
        ```terminal
        $ oc debug deployment/my-deployment --as-root -n <project_name>
        ```
1.  Start a debug pod with root access, based on a deployment configuration.
    1.  Obtain a project’s deployment configuration name:
        ```terminal
        $ oc get deploymentconfigs -n <project_name>
        ```
    1.  Start a debug pod with root privileges, based on the deployment configuration:
        ```terminal
        $ oc debug deploymentconfig/my-deployment-configuration --as-root -n <project_name>
        ```

        :::note

        You can append `-- <command>` to the preceding `oc debug` commands to run individual commands within a debug pod, instead of running an interactive shell.
        
        :::