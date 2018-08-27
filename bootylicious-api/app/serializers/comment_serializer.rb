class CommentSerializer < ActiveModel::Serializer
attributes :id, :content, :workout_id
belongs_to :concert

end
