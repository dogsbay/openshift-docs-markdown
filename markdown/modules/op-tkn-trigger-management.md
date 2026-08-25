# Trigger management commands {id="op-tkn-trigger-management_{{ context }}"}

## eventlistener {id="_eventlistener"}
Manage EventListeners.

```terminal title="Example: Display help"
$ tkn eventlistener -h
```

## eventlistener delete {id="_eventlistener_delete"}
Delete an EventListener.

```terminal title="Example: Delete mylistener1 and mylistener2 EventListeners in a namespace"
$ tkn eventlistener delete mylistener1 mylistener2 -n myspace
```
## eventlistener describe {id="_eventlistener_describe"}
Describe an EventListener.

```terminal title="Example: Describe the mylistener EventListener in a namespace"
$ tkn eventlistener describe mylistener -n myspace
```

## eventlistener list {id="_eventlistener_list"}
List EventListeners.

```terminal title="Example: List all the EventListeners in a namespace"
$ tkn eventlistener list -n myspace
```

## eventlistener logs {id="_eventlistener_logs"}
Display logs of an EventListener.

```terminal title="Example: Display the logs of the mylistener EventListener in a namespace"
$ tkn eventlistener logs mylistener -n myspace
```

## triggerbinding {id="_triggerbinding"}
Manage TriggerBindings.

```terminal title="Example: Display TriggerBindings help"
$ tkn triggerbinding -h
```

## triggerbinding delete {id="_triggerbinding_delete"}
Delete a TriggerBinding.

```terminal title="Example: Delete mybinding1 and mybinding2 TriggerBindings in a namespace"
$ tkn triggerbinding delete mybinding1 mybinding2 -n myspace
```
## triggerbinding describe {id="_triggerbinding_describe"}
Describe a TriggerBinding.

```terminal title="Example: Describe the mybinding TriggerBinding in a namespace"
$ tkn triggerbinding describe mybinding -n myspace
```

## triggerbinding list {id="_triggerbinding_list"}
List TriggerBindings.

```terminal title="Example: List all the TriggerBindings in a namespace"
$ tkn triggerbinding list -n myspace
```

## triggertemplate {id="_triggertemplate"}
Manage TriggerTemplates.

```terminal title="Example: Display TriggerTemplate help"
$ tkn triggertemplate -h
```
## triggertemplate delete {id="_triggertemplate_delete"}
Delete a TriggerTemplate.

```terminal title="Example: Delete mytemplate1 and mytemplate2 TriggerTemplates in a namespace"
$ tkn triggertemplate delete mytemplate1 mytemplate2 -n `myspace`
```
## triggertemplate describe {id="_triggertemplate_describe"}
Describe a TriggerTemplate.

```terminal title="Example: Describe the mytemplate TriggerTemplate in a namespace"
$ tkn triggertemplate describe mytemplate -n `myspace`
```

## triggertemplate list {id="_triggertemplate_list"}
List TriggerTemplates.

```terminal title="Example: List all the TriggerTemplates in a namespace"
$ tkn triggertemplate list -n myspace
```
## clustertriggerbinding {id="_clustertriggerbinding"}
Manage ClusterTriggerBindings.

```terminal title="Example: Display ClusterTriggerBindings help"
$ tkn clustertriggerbinding -h
```

## clustertriggerbinding delete {id="_clustertriggerbinding_delete"}
Delete a ClusterTriggerBinding.

```terminal title="Example: Delete myclusterbinding1 and myclusterbinding2 ClusterTriggerBindings"
$ tkn clustertriggerbinding delete myclusterbinding1 myclusterbinding2
```
## clustertriggerbinding describe {id="_clustertriggerbinding_describe"}
Describe a ClusterTriggerBinding.

```terminal title="Example: Describe the myclusterbinding ClusterTriggerBinding"
$ tkn clustertriggerbinding describe myclusterbinding
```

## clustertriggerbinding list {id="_clustertriggerbinding_list"}
List ClusterTriggerBindings.

```terminal title="Example: List all ClusterTriggerBindings"
$ tkn clustertriggerbinding list
```