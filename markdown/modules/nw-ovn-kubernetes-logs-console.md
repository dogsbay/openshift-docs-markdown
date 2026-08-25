{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the OVN-Kubernetes logs using the web console {id="nw-ovn-kubernetes-logs-console_{{ context }}"}

To view OVN-Kubernetes pod logs in the {{ product_title }} web console, you can open pod logs for each container in the `openshift-ovn-kubernetes` project. {._abstract}

**Prerequisites**

*   Access to the OpenShift CLI (`oc`).

**Procedure**

1.  In the {{ product_title }} console, navigate to **Workloads** → **Pods** or navigate to the pod through the resource you want to investigate.
1.  Select the `openshift-ovn-kubernetes` project from the drop-down menu.
1.  Click the name of the pod you want to investigate.
1.  Click **Logs**. By default for the `ovnkube-master` the logs associated with the `northd` container are displayed.
1.  Use the down-down menu to select logs for each container in turn.