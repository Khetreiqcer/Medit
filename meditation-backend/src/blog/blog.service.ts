// src/blog/blog.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto, user): Promise<Post> {
    const newPost = new this.postModel({
      ...createPostDto,
      autorId: user._id,
    });
    return newPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException('Postagem não encontrada');
    }
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto, user): Promise<Post> {
    const post = await this.postModel.findOneAndUpdate(
      { _id: id, autorId: user._id },
      updatePostDto,
      { new: true },
    );
    if (!post) {
      throw new NotFoundException('Postagem não encontrada ou acesso negado');
    }
    return post;
  }

  async remove(id: string, user): Promise<void> {
    const result = await this.postModel
      .deleteOne({ _id: id, autorId: user._id })
      .exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Postagem não encontrada ou acesso negado');
    }
  }
}
