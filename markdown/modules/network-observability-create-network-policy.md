{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a network policy for network observability {id="network-observability-network-policy_{{ context }}"}

Customize network policies for the `netobserv` and `netobserv-privileged` namespaces by disabling the managed installation in the FlowCollector resource. Use the default managed policies as a template to create manual network policy configurations that meet specific security requirements. {._abstract}

**Procedure**

1.  Navigate to **Networking** → **NetworkPolicies**.
1.  Select the `netobserv` project from the **Project** dropdown menu.
1.  Name the policy. For this example, the policy name is `allow-ingress`.
1.  Click **Add ingress rule** three times to create three ingress rules.
1.  Specify the following in the form:
    1.  Make the following specifications for the first **Ingress rule**:
        1.  From the **Add allowed source** dropdown menu, select **Allow pods from the same namespace**.
    1.  Make the following specifications for the second **Ingress rule**:
        1.  From the **Add allowed source** dropdown menu, select **Allow pods from inside the cluster**.
        1.  Click **+ Add namespace selector**.
        1.  Add the label, `kubernetes.io/metadata.name`, and the selector, `openshift-console`.
    1.  Make the following specifications for the third **Ingress rule**:
        1.  From the **Add allowed source** dropdown menu, select **Allow pods from inside the cluster**.
        1.  Click **+ Add namespace selector**.
        1.  Add the label, `kubernetes.io/metadata.name`, and the selector, `openshift-monitoring`.
            ```yaml title="Example netobserv network policy"
            apiVersion: networking.k8s.io/v1
            kind: NetworkPolicy
            spec:
              ingress:
              - from:
                - podSelector: {}
                - namespaceSelector:
                    matchLabels:
                      kubernetes.io/metadata.name: netobserv-privileged
              - from:
                - namespaceSelector:
                    matchLabels:
                      kubernetes.io/metadata.name: openshift-console
                ports:
                - port: 9001
                  protocol: TCP
              - from:
                - namespaceSelector:
                    matchLabels:
                      kubernetes.io/metadata.name: openshift-monitoring
              podSelector: {}
              policyTypes:
              - Ingress
            ```
            ```yaml title="Example netobserv-privileged network policy"
            apiVersion: networking.k8s.io/v1
            kind: NetworkPolicy
            metadata:
              name: netobserv
              namespace: netobserv-privileged
            spec:
              ingress:
              - from:
                - namespaceSelector:
                    matchLabels:
                      kubernetes.io/metadata.name: openshift-monitoring
              podSelector: {}
              policyTypes:
              - Ingress
            ```

**Verification**

1.  Navigate to **Observe** → **Network Traffic**.
1.  View the **Traffic Flows** tab, or any tab, to verify that the data is displayed.
1.  Navigate to **Observe** → **Dashboards**. In the NetObserv/Health selection, verify that the flows are being ingested and sent to Loki, which is represented in the first graph.