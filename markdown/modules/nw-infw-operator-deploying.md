{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying Ingress Node Firewall Operator {id="nw-infw-operator-deploying_{{ context }}"}

To deploy the Ingress Node Firewall Operator, create a `IngressNodeFirewallConfig` custom resource that will deploy the Operator’s daemon set. You can deploy one or multiple `IngressNodeFirewall` CRDs to nodes by applying firewall rules. {._abstract}

**Prerequisite**

*   The Ingress Node Firewall Operator is installed.

**Procedure**

1.  Create the `IngressNodeFirewallConfig` inside the `openshift-ingress-node-firewall` namespace named `ingressnodefirewallconfig`.
1.  Run the following command to deploy Ingress Node Firewall Operator rules:
    ```terminal
    $ oc apply -f rule.yaml
    ```