{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring Loki to tolerate memberlist creation failure {id="logging-loki-memberlist-ip_{{ context }}"}

In an {{ product_title }} cluster, administrators generally use a non-private IP network range. As a result, the LokiStack memberlist configuration fails because, by default, it only uses private IP networks.

As an administrator, you can select the pod network for the memberlist configuration. You can modify the `LokiStack` custom resource (CR) to use the `podIP` address in the `hashRing` spec. To configure the `LokiStack` CR, use the following command:

```terminal
$ oc patch LokiStack logging-loki -n openshift-logging  --type=merge -p '{"spec": {"hashRing":{"memberlist":{"instanceAddrType":"podIP"},"type":"memberlist"}}}'
```

```yaml title="Example LokiStack to include podIP"
apiVersion: loki.grafana.com/v1
kind: LokiStack
metadata:
  name: logging-loki
  namespace: openshift-logging
spec:
# ...
  hashRing:
    type: memberlist
    memberlist:
      instanceAddrType: podIP
# ...
```