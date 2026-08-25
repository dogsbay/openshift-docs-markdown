---
title: Customizing the cert-manager Operator by using the CertManager custom resource
---

# Customizing the cert-manager Operator by using the CertManager custom resource {#cert-manager-customizing-api-fields}

You can customize the {{ cert_manager_operator }} after installation to suit your cluster requirements.

- Configure the `CertManager` custom resource (CR) to modify the behavior of cert-manager components, such as the cert-manager controller, CA injector, and webhook.
- Set environment variables for the controller pod.
- Define resource requests and limits to manage CPU and memory usage.
- Configure scheduling rules to control where pods run in your cluster.
- Configure the cluster `APIServer` custom resource (CR) to apply the cluster-wide TLS security profile to cert-manager components.

```yaml {title="Example CertManager CR YAML file"}
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

> [!WARNING]
> To override unsupported arguments, you can add `spec.unsupportedConfigOverrides` section in the `CertManager` resource, but using `spec.unsupportedConfigOverrides` is unsupported.

**Additional resources**

- [Deleting a TLS secret automatically upon Certificate removal](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-override-flag-controller_cert-manager-customizing-api-fields)

**Additional resources**

- [High Availability](https://cert-manager.io/docs/installation/best-practice/#high-availability)

**Additional resources**

- [Explanation of fields in the CertManager custom resource](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

**Additional resources**

- [Explanation of fields in the CertManager custom resource](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

**Additional resources**

- [Explanation of fields in the CertManager custom resource](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

**Additional resources**

- [Explanation of fields in the CertManager custom resource](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-explanation-of-certmanager-cr-fields_cert-manager-customizing-api-fields)

**Additional resources**

- [Understanding feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features-about_nodes-cluster-enabling)
- [Understanding TLS security profiles](/openshift-docs-markdown/security/tls-security-profiles#tls-profiles-understanding_tls-security-profiles)
