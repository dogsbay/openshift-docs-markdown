{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using {{ policy_gen_cr }} CRs to apply worker node policies to the worker node {id="ztp-additional-worker-policies-{{ policy_gen_cr }}_{{ context }}"}

You can create policies for the additional worker node by using `{{ policy_gen_cr }}` CRs. {._abstract}

**Procedure**

1.  Create the following `{{ policy_gen_cr }}` CR:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-worker-node-preparing-policies.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-worker-node-preparing-policies.md" %}
{% endif %}

    You can generate the content of `crio` and `kubelet` configuration files.
1.  Add the created policy template to the Git repository monitored by the ArgoCD `policies` application.
1.  Add the policy in the `kustomization.yaml` file.
1.  Commit the changes in Git, and then push to the Git repository being monitored by the {{ ztp }} ArgoCD application.
1.  To remediate the new policies to your spoke cluster, create a TALM custom resource:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: example-sno-worker-policies
      namespace: default
    spec:
      backup: false
      clusters:
      - example-sno
      enable: true
      managedPolicies:
      - group-du-sno-config-policy
      - example-sno-workers-config-policy
      - example-sno-config-policy
      preCaching: false
      remediationStrategy:
        maxConcurrency: 1
    EOF
    ```