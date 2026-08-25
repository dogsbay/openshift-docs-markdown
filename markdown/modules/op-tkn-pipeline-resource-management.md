# Pipeline Resource management commands {id="op-tkn-pipeline-resource-management_{{ context }}"}

## resource {id="_resource"}
Manage Pipeline Resources.

```terminal title="Example: Display help"
$ tkn resource -h
```

## resource create {id="_resource_create"}
Create a Pipeline Resource.

```terminal title="Example: Create a Pipeline Resource in a namespace"
$ tkn resource create -n myspace
```
This is an interactive command that asks for input on the name of the Resource, type of the Resource, and the values based on the type of the Resource.

## resource delete {id="_resource_delete"}
Delete a Pipeline Resource.

```terminal title="Example: Delete the myresource Pipeline Resource from a namespace"
$ tkn resource delete myresource -n myspace
```

## resource describe {id="_resource_describe"}
Describe a Pipeline Resource.

```terminal title="Example: Describe the myresource Pipeline Resource"
$ tkn resource describe myresource -n myspace
```
## resource list {id="_resource_list"}
List Pipeline Resources.

```terminal title="Example: List all Pipeline Resources in a namespace"
$ tkn resource list -n myspace
```