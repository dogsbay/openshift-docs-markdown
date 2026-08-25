{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a network policy using {{ cluster_manager }} {id="nw-networkpolicy-create-ocm_{{ context }}"}

To define granular rules describing the ingress or egress network traffic allowed for namespaces in your cluster, you can create a network policy. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.
*   You configured an identity provider for your cluster.
*   You added your user account to the configured identity provider.
*   You created a project within your {{ product_title }} cluster.

**Procedure**

1.  From {{ cluster_manager_url }}, click the cluster you want to access.
1.  Click **Open console** to navigate to the OpenShift web console.
1.  Click your identity provider and give your credentials to log in to the cluster.
1.  From the administrator perspective, under **Networking**, click **NetworkPolicies**.
1.  Click **Create NetworkPolicy**.
1.  Give a name for the policy in the **Policy name** field.
1.  Optional: You can give the label and selector for a specific pod if this policy applies only to one or more specific pods. If you do not select a specific pod, then this policy will be applicable to all pods on the cluster.
1.  Optional: You can block all ingress and egress traffic by using the **Deny all ingress traffic** or **Deny all egress traffic** checkboxes.
1.  You can also add any combination of ingress and egress rules, allowing you to specify the port, namespace, or IP blocks you want to approve.
1.  Add ingress rules to your policy:
    1.  Select **Add ingress rule** to configure a new rule. This action creates a new **Ingress rule** row with an **Add allowed source** drop-down menu where you specify how to limit inbound traffic. The drop-down menu offers three options to limit your ingress traffic:
        *   **Allow pods from the same namespace** limits traffic to pods within the same namespace. You can specify the pods in a namespace, but leaving this option blank allows all of the traffic from pods in the namespace.
        *   **Allow pods from inside the cluster** limits traffic to pods within the same cluster as the policy. You can specify namespaces and pods from which you want to allow inbound traffic. Leaving this option blank allows inbound traffic from all namespaces and pods within this cluster.
        *   **Allow peers by IP block** limits traffic from a specified Classless Inter-Domain Routing (CIDR) IP block. You can block certain IPs with the exceptions option. Leaving the CIDR field blank allows all inbound traffic from all external sources.
    1.  You can restrict all of your inbound traffic to a port. If you do not add any ports then all ports are accessible to traffic.
1.  Add egress rules to your network policy:
    1.  Select **Add egress rule** to configure a new rule. This action creates a new **Egress rule** row with an **Add allowed destination**"* drop-down menu where you specify how to limit outbound traffic. The drop-down menu offers three options to limit your egress traffic:
        *   **Allow pods from the same namespace** limits outbound traffic to pods within the same namespace. You can specify the pods in a namespace, but leaving this option blank allows all of the traffic from pods in the namespace.
        *   **Allow pods from inside the cluster** limits traffic to pods within the same cluster as the policy. You can specify namespaces and pods from which you want to allow outbound traffic. Leaving this option blank allows outbound traffic from all namespaces and pods within this cluster.
        *   **Allow peers by IP block** limits traffic from a specified CIDR IP block. You can block certain IPs with the exceptions option. Leaving the CIDR field blank allows all outbound traffic from all external sources.
    1.  You can restrict all of your outbound traffic to a port. If you do not add any ports then all ports are accessible to traffic.