---
title: Customizing the cert-manager Operator by using the CertManager custom resource
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Customizing the cert-manager Operator by using the CertManager custom resource {id="cert-manager-customizing-api-fields"}
{%- set context = "cert-manager-customizing-api-fields" %}

You can customize the {{ cert_manager_operator }} after installation to suit your cluster requirements. {._abstract}

*   Configure the `CertManager` custom resource (CR) to modify the behavior of cert-manager components, such as the cert-manager controller, CA injector, and webhook.
*   Set environment variables for the controller pod.
*   Define resource requests and limits to manage CPU and memory usage.
*   Configure scheduling rules to control where pods run in your cluster.
*   Configure the cluster `APIServer` custom resource (CR) to apply the cluster-wide TLS security profile to cert-manager components.

```yaml title="Example CertManager CR YAML file"
apiVersion: operator.openshift.io/v1alpha1
kind: CertManager
metadata:
  name: cluster
spec:
  controllerConfig:
    overrideArgs:
      - "--dns01-recursive-nameservers=8.8.8.8:53,1.1.1.1:53"
    overrideEnv:
      - name: HTTP_PROXY
        value: http://proxy.example.com:8080
    overrideResources:
      limits:
        cpu: "200m"
        memory: "512Mi"
      requests:
        cpu: "100m"
        memory: "256Mi"
    overrideScheduling:
      nodeSelector:
        custom: "label"
      tolerations:
        - key: "key1"
          operator: "Equal"
          value: "value1"
          effect: "NoSchedule"
    overrideReplicas: 2
#...

  webhookConfig:
    overrideArgs:
#...
    overrideResources:
#...
    overrideScheduling:
#...
    overrideReplicas:
#...

  cainjectorConfig:
    overrideArgs:
#...
    overrideResources:
#...
    overrideScheduling:
#...
    overrideReplicas:
#...
```


:::warning

To override unsupported arguments, you can add `spec.unsupportedConfigOverrides` section in the `CertManager` resource, but using `spec.unsupportedConfigOverrides` is unsupported.

:::


{% leveloffset +1 %}{% include "./modules/cert-manager-explanation-of-certmanager-cr-fields.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deleting a TLS secret automatically upon Certificate removal](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-override-flag-controller_cert-manager-customizing-api-fields)

{% leveloffset +2 %}{% include "./modules/cert-manager-common-configuration-fields.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [High Availability](https://cert-manager.io/docs/installation/best-practice/#high-availability)

{% leveloffset +2 %}{% include "./modules/cert-manager-overridable-arguments.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cert-manager-overridable-env-variables.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cert-manager-overridable-resource-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cert-manager-overridable-scheduling-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-override-environment-variables.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Explanation of fields in the CertManager custom resource](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

{% leveloffset +1 %}{% include "./modules/cert-manager-override-arguments.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Explanation of fields in the CertManager custom resource](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

{% leveloffset +1 %}{% include "./modules/cert-manager-override-flag-controller.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-cpu-memory.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Explanation of fields in the CertManager custom resource](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

{% leveloffset +1 %}{% include "./modules/cert-manager-override-scheduling.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Explanation of fields in the CertManager custom resource](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

{% leveloffset +1 %}{% include "./modules/cert-manager-configure-tls-adherence.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cert-manager-verify-tls-adherence.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling)
*   [Understanding TLS security profiles](/security/tls-security-profiles#tls-profiles-understanding_tls-security-profiles)