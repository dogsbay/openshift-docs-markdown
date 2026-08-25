{%- set _mod_docs_content_type = "PROCEDURE" %}
# Filtering audit logs {id="security-audit-log-basic-filtering_{{ context }}"}

You can use `jq` or another JSON parsing tool to filter the API server audit logs. {._abstract}


:::note

The amount of information logged to the API server audit logs is controlled by the audit log policy that is set.

:::


The following procedure provides examples of using `jq` to filter audit logs on control plane node `node-1.example.com`. See the [jq Manual](https://stedolan.github.io/jq/manual/) for detailed information on using `jq`.

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have installed `jq`.

**Procedure**

*   Filter OpenShift API server audit logs by user:
    ```terminal
    $ oc adm node-logs node-1.example.com  \
      --path=openshift-apiserver/audit.log \
      | jq 'select(.user.username == "myusername")'
    ```
*   Filter OpenShift API server audit logs by user agent:
    ```terminal
    $ oc adm node-logs node-1.example.com  \
      --path=openshift-apiserver/audit.log \
      | jq 'select(.userAgent == "cluster-version-operator/v0.0.0 (linux/amd64) kubernetes/$Format")'
    ```
*   Filter Kubernetes API server audit logs by a certain API version and only output the user agent:
    ```terminal
    $ oc adm node-logs node-1.example.com  \
      --path=kube-apiserver/audit.log \
      | jq 'select(.requestURI | startswith("/apis/apiextensions.k8s.io/v1beta1")) | .userAgent'
    ```
*   Filter OpenShift OAuth API server audit logs by excluding a verb:
    ```terminal
    $ oc adm node-logs node-1.example.com  \
      --path=oauth-apiserver/audit.log \
      | jq 'select(.verb != "get")'
    ```
*   Filter OpenShift OAuth server audit logs by events that identified a username and failed with an error:
    ```terminal
    $ oc adm node-logs node-1.example.com  \
      --path=oauth-server/audit.log \
      | jq 'select(.annotations["authentication.openshift.io/username"] != null and .annotations["authentication.openshift.io/decision"] == "error")'
    ```