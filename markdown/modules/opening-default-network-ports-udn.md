{%- set _mod_docs_content_type = "REFERENCE" %}
# Opening default network ports on user-defined network pods {id="opening-default-network-ports-udn_{{ context }}"}

To allow default network pods to connect to a user-defined network pod, you can use the `k8s.ovn.org/open-default-ports` annotation. This annotation opens specific ports on the user-defined network pod for access from the default network. {._abstract}

By default, pods on a user-defined network (UDN) are isolated from the default network. This means that default network pods, such as those running monitoring services (Prometheus or Alertmanager) or the {{ product_title }} image registry, cannot initiate connections to UDN pods.

The following pod specification allows incoming TCP connections on port `80` and UDP traffic on port `53` from the default network:
```yaml
apiVersion: v1
kind: Pod
metadata:
  annotations:
    k8s.ovn.org/open-default-ports: |
      - protocol: tcp
        port: 80
      - protocol: udp
        port: 53
# ...
```


:::note

Open ports are accessible on the pod’s default network IP, not its UDN network IP.

:::