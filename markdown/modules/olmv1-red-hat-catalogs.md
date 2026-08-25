{%- set _mod_docs_content_type = "REFERENCE" %}
# Red Hat-provided Operator catalogs in {{ olmv1 }} {id="olmv1-red-hat-catalogs_{{ context }}"}

{{ olmv1_first }} includes several Red&#160;Hat-provided Operator catalogs on the cluster by default. If you want to add a catalog to your cluster, create a custom resource (CR) for the catalog and apply it to the cluster. {._abstract}

The following custom resource (CR) examples show the default catalogs installed on the cluster:

```yaml title="Red&#160;Hat Operators catalog" {minja}
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: openshift-redhat-operators
spec:
  priority: -100
  source:
    image:
      pollIntervalMinutes: <poll_interval_duration>
      ref: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
    type: Image
```
Replace `<poll_interval_duration>` with the interval in minutes for polling the remote registry for newer image digests. To disable polling, do not set the field.

```yaml title="Certified Operators catalog" {minja}
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: openshift-certified-operators
spec:
priority: -200
  source:
    type: image
    image:
      pollIntervalMinutes: 10
      ref: registry.redhat.io/redhat/certified-operator-index:v{{ product_version }}
    type: Image
```

```yaml title="Red&#160;Hat Marketplace catalog" {minja}
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: openshift-redhat-marketplace
spec:
  priority: -300
  source:
    image:
      pollIntervalMinutes: 10
      ref: registry.redhat.io/redhat/redhat-marketplace-index:v{{ product_version }}
    type: Image
```

```yaml title="Community Operators catalog" {minja}
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: openshift-community-operators
spec:
  priority: -400
  source:
    image:
      pollIntervalMinutes: 10
      ref: registry.redhat.io/redhat/community-operator-index:v{{ product_version }}
    type: Image
```

The following command adds a catalog to your cluster:

```terminal title="Command syntax"
$ oc apply -f <catalog_name>.yaml
```
Replace `<catalog_name>.yaml` with the catalog CR, such as `my-catalog.yaml`.