{%- set _mod_docs_content_type = "REFERENCE" %}
# Command quick reference list {id="rosa-quickstart-instructions"}

If you have already created your first cluster and users, this list can serve as a command quick reference list when creating additional clusters and users.

```terminal
## Configures your AWS account and ensures everything is setup correctly
$ rosa init
```

```terminal
## Starts the cluster creation process (~30-40minutes)
$ rosa create cluster --cluster-name=<cluster_name>
```

```terminal
## Connect your IDP to your cluster
$ rosa create idp --cluster=<cluster_name> --interactive
```

```terminal
## Promotes a user from your IDP to dedicated-admin level
$ rosa grant user dedicated-admin --user=<idp_user_name> --cluster=<cluster_name>
```

```terminal
## Checks if your install is ready (look for State: Ready),
## and provides your Console URL to login to the web console.
$ rosa describe cluster --cluster=<cluster_name>
```