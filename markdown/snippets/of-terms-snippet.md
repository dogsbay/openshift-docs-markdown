{%- set _mod_docs_content_type = "SNIPPET" %}

## Bundle {id="olm-common-terms-bundle_{{ context }}"}
In the bundle format, a _bundle_ is a collection of an Operator CSV, manifests, and metadata. Together, they form a unique version of an Operator that can be installed onto the cluster.

## Bundle image {id="olm-common-terms-bundle-image_{{ context }}"}
In the bundle format, a _bundle image_ is a container image that is built from Operator manifests and that contains one bundle. Bundle images are stored and distributed by Open Container Initiative (OCI) spec container registries, such as Quay.io or DockerHub.

## Catalog source {id="olm-common-terms-catalogsource_{{ context }}"}
A _catalog source_ represents a store of metadata that OLM can query to discover and install Operators and their dependencies.

## Channel {id="olm-common-terms-channel_{{ context }}"}
A _channel_ defines a stream of updates for an Operator and is used to roll out updates for subscribers. The head points to the latest version of that channel. For example, a `stable` channel would have all stable versions of an Operator arranged from the earliest to the latest.

An Operator can have several channels, and a subscription binding to a certain channel would only look for updates in that channel.

## Channel head {id="olm-common-terms-channel-head_{{ context }}"}
A _channel head_ refers to the latest known update in a particular channel.

## Cluster service version {id="olm-common-terms-csv_{{ context }}"}
A _cluster service version (CSV)_ is a YAML manifest created from Operator
metadata that assists OLM in running the Operator in a cluster. It is the
metadata that accompanies an Operator container image, used to populate user
interfaces with information such as its logo, description, and version.

It is also a source of technical information that is required to run the Operator, like the RBAC rules it requires and which custom resources (CRs) it manages or depends on.

## Dependency {id="olm-common-terms-dependency_{{ context }}"}
An Operator may have a _dependency_ on another Operator being present in the cluster. For example, the Vault Operator has a dependency on the etcd Operator for its data persistence layer.

OLM resolves dependencies by ensuring that all specified versions of Operators and CRDs are installed on the cluster during the installation phase. This dependency is resolved by finding and installing an Operator in a catalog that satisfies the required CRD API, and is not related to packages or bundles.

## Extension {id="olm-common-terms-extension_{{ context }}"}

Extensions enable cluster administrators to extend capabilities for users on their {{ product_title }} cluster. Extensions are managed by {{ olmv1_first }}.

The `ClusterExtension` API streamlines management of installed extensions, which includes Operators via the `registry+v1` bundle format, by consolidating user-facing APIs into a single object. Administrators and SREs can use the API to automate processes and define desired states by using GitOps principles.

## Index image {id="olm-common-terms-index-image_{{ context }}"}
In the bundle format, an _index image_ refers to an image of a database (a database snapshot) that contains information about Operator bundles including CSVs and CRDs of all versions. This index can host a history of Operators on a cluster and be maintained by adding or removing Operators using the `opm` CLI tool.

## Install plan {id="olm-common-terms-installplan_{{ context }}"}
An _install plan_ is a calculated list of resources to be created to automatically install or upgrade a CSV.

## Multitenancy {id="olm-common-terms-multitenancy_{{ context }}"}
A _tenant_ in {{ product_title }} is a user or group of users that share common access and privileges for a set of deployed workloads, typically represented by a namespace or project. You can use tenants to provide a level of isolation between different groups or teams.

When a cluster is shared by multiple users or groups, it is considered a _multitenant_ cluster.

## Operator {id="olm-common-terms-operator_{{ context }}"}

Operators are a method of packaging, deploying, and managing a Kubernetes application. A Kubernetes application is an app that is both deployed on Kubernetes and managed using the Kubernetes APIs and `kubectl` or `oc` tooling.

In {{ olmv1_first }}, the `ClusterExtension` API streamlines management of installed extensions, which includes Operators via the `registry+v1` bundle format.

## Operator group {id="olm-common-terms-operatorgroup_{{ context }}"}

An _Operator group_ configures all Operators deployed in the same namespace as the `OperatorGroup` object to watch for their CR in a list of namespaces or cluster-wide.

## Package {id="olm-common-terms-package_{{ context }}"}
In the bundle format, a _package_ is a directory that encloses all released history of an Operator with each version. A released version of an Operator is described in a CSV manifest alongside the CRDs.

## Registry {id="olm-common-terms-registry_{{ context }}"}
A _registry_ is a database that stores bundle images of Operators, each with all of its latest and historical versions in all channels.

## Subscription {id="olm-common-terms-subscription_{{ context }}"}
A _subscription_ keeps CSVs up to date by tracking a channel in a package.

## Update graph {id="olm-common-terms-update-graph_{{ context }}"}
An _update graph_ links versions of CSVs together, similar to the update graph of any other packaged software. Operators can be installed sequentially, or certain versions can be skipped. The update graph is expected to grow only at the head with newer versions being added.

Also known as _update edges_ or _update paths_.