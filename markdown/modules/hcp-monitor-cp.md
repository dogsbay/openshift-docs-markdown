{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring the control plane {id="hcp-monitor-cp_{{ context }}"}

While the deployment proceeds, you can monitor the control plane.  {._abstract}

You can gather information about the following artifacts:

*   The HyperShift Operator
*   The `HostedControlPlane` pod
*   The bare-metal hosts
*   The agents
*   The `InfraEnv` resource
*   The `HostedCluster` and `NodePool` resources

**Procedure**

1.  Enter the following command to export the `kubeconfig` file for the deployment:
    ```terminal
    $ export KUBECONFIG=/root/.kcli/clusters/hub-ipv4/auth/kubeconfig
    ```
1.  Enter the following command to monitor the deployment:
    ```terminal
    $ watch "oc get pod -n hypershift;echo;echo;\
      oc get pod -n clusters-hosted-ipv4;echo;echo;\
      oc get bmh -A;echo;echo;\
      oc get agent -A;echo;echo;\
      oc get infraenv -A;echo;echo;\
      oc get hostedcluster -A;echo;echo;\
      oc get nodepool -A;echo;echo;"
    ```